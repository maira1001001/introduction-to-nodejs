/** @format */

const complaint1 = () => {
  console.log('Este hombre no limpió correctamente el baño');
  console.log('Complain revels a situation you do not desire');
};

const complaint2 = () => {
  console.log(
    'Debería limpiarlo nuevamente. Pasar el trapo por lo lugares donde quedó sucio, lavar el trapo de piso'
  );
  console.log(
    'Complain about an action shows you are forcing someone to do things with your own style'
  );
};

const complaint3 = () => {
  console.log(
    'Yo lo haría de otra forma. Ves! así lo haría! mirá como limpio? Así se limpia bien! Te va a ir mal en la vida por limpiar así'
  );
  console.log(
    'Complain manifest you believe you are the perfect person to do this things'
  );
};

module.exports = {
  complaint1,
  complaint2,
  complaint3,
  complaint4() {
    console.log(
      'Ves ahora como limpié? Lo podés ver? Así se hace! si no, te vas a llenar de microbios, de peste, te va a agarrar coronavirus y tu vida va a ser una miseria'
    );
  },
};

module.exports.complaint = () =>
  console.log(
    'Who am I to evaluate the way he clean the bathroom? If You believed this was so important, I would have show him how to clean and I would have tell him the reasons why I should have clean in this way'
  );
