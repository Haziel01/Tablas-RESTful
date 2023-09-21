// controllers/calculadora.js

// Sumar n1 + n2
function sumar(req, res, next) {
  const { n1, n2 } = req.params;
  const resultado = parseFloat(n1) + parseFloat(n2);
  res.json({ resultado });
}

// Multiplicar n1 * n2
function multiplicar(req, res, next) {
  const { n1, n2 } = req.params;
  const resultado = parseFloat(n1) * parseFloat(n2);
  res.json({ resultado });
}

// Dividir n1 / n2
function dividir(req, res, next) {
  const { n1, n2 } = req.params;
  const resultado = parseFloat(n1) / parseFloat(n2);
  res.json({ resultado });
}

// Potencia n1 ^ n2
function potencia(req, res, next) {
  const { n1, n2 } = req.params;
  const resultado = Math.pow(parseFloat(n1), parseFloat(n2));
  res.json({ resultado });
}

// Restar n1 - n2
function restar(req, res, next) {
  const { n1, n2 } = req.params;
  const resultado = parseFloat(n1) - parseFloat(n2);
  res.json({ resultado });
}

module.exports = {
    sumar,
    multiplicar,
    dividir,
    potencia,
    restar
};
