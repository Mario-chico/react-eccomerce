
export const TestCard = ({}) => {

  const ejercicios = [
    {"id": 1,"text": "Primeros pasos"},
    {"id": 2,"text": "pullups 5"} ,
    {"id": 3,"text": "squats 20"},
    {"id": 4,"text": "chin up 5"},
    {"id": 5,"text": "hollow body 20"},
    {"id": 6,"text": "salto de cuerda 60s"},
  ]

  return(
    <div className="h-full w-52 bg-green-600 py-3 flex justify-center flex-col items-center shadow-2xl">
      <span className=""><strong>{ejercicios[0].text}</strong></span>
      <ul className="list-roman" title="Ejercicios de las pruebas" dir="ltr" lang="es" role="list">
        {ejercicios.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button className="box-border bg-green-500 rounded-md" type='submit' onClick={()=>alert('click')}>Acepto el reto!</button>
    </div>
  );
}