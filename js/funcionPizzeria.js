const calculo_precio = (PB, P2I, P3I, RC, RG) => {
  let promocion = false;
  let T = 0;

  if (P3I > 0) {
    if (RG > 0) {
      T = (12 + 3) * 0.8;
      promocion = true;
      P3I = P3I - 1;
      RG = RG - 1;
    };
  };

  if (promocion === false) {
    if (RC > 0) {const onClickButton = () => {
      const PB = document.getElementById("valorPB").textContent;
      const P2I = document.getElementById("valorP2I").textContent;
      const P3I = document.getElementById("valorP3I").textContent;
      const RC = document.getElementById("valorRC").textContent;
      const RG = document.getElementById("valorRG").textContent;

      console.log(calculo_precio(PB, P2I, P3I, RC, RG));
    };

    document.getElementById("miBoton").addEventListener('click', calculo_precio(1,2,3,0,1));
      if (P2I > 0) {
        T = (10 + 2) * 0.85;
        promocion = true;
        P2I = P2I - 1;
        RC = RC - 1;
      };
      if (promocion === false) {
        if (PB > 0) {
          T = (5 + 2) * 0.9;
          PB = PB - 1;
          RC = RC - 1;
        };
      };
    };
  };

  const VALOR_PB = PB * 5;
  const VALOR_P2I = P2I * 10;
  const VALOR_P3I = P3I * 12;
  const VALOR_RC = RC * 2;
  const VALOR_RG = RG * 3;
  T = T + VALOR_PB + VALOR_P2I + VALOR_P3I + VALOR_RC + VALOR_RG;

  return T;
};

const onClickButton = () => {
  const PB = document.getElementById("valorPB").value;
  const P2I = document.getElementById("valorP2I").value;
  const P3I = document.getElementById("valorP3I").value;
  const RC = document.getElementById("valorRC").value;
  const RG = document.getElementById("valorRG").value;

  const precioFinal = calculo_precio(Number(PB), Number(P2I), Number(P3I), Number(RC), Number(RG));
  document.getElementById("precio").textContent = precioFinal;
};

document.getElementById("miBoton").addEventListener('click', onClickButton);