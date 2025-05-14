import { useState } from 'react' //importo l'hook
import axios from 'axios'; //importo la libreria axios

function App() {
const [formData, setFormData] = useState({ //formData è uno stato che rappresenta i dati del form
  author: '',
  title: '',
  body: '',
  public: false //è il valore booleano per la checkbox
})

const handleChange = (e) => { //funzione che gestisce ogni cambiamento nei campi del form
  const { name, value, type, checked } = e.target; 
  setFormData({
    ...formData, //spread operator per mantenere gli altri camnpi invariati 
    [name]: type === 'checkbox' ? checked : value  //per la checkbox il valore è booleano, per gli altri campi è una stringa
  })
}
const handleSubmit = (e) => { //viene eseguita quando premo il bottone invia
  e.preventDefault();
  axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData).then((res) => { //i dati vengono inviati all'endpoint
    console.log(res.data);
    setFormData({ //una volta inviati i dati, il form viene resettato
      author: '',
      title: '',
      body: '',
      public: false 
    });
    alert('Post creato con successo!'); //messaggio di conferma
  })
}
  return (
    <>
      <div className="container">
        <h1 className='text-center mt-3'>Crea un nuovo post</h1>
        <div className="row">
          <form className='border rounded bg-light p-4 mt-4' onSubmit={handleSubmit}> 
            <div className="col mb-3">
              <input
                type="text"
                name='author'
                id='author'
                placeholder='Author'
                className='form-control'
                value={formData.author} //legato allo stato formData.author
                onChange={handleChange} //per ogni modifica viene chiamato handleChange
              />
            </div>
            <div className="col mb-3">
              <input
                type="text"
                name='title'
                id='title'
                placeholder='title'
                className='form-control'
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="col mb-3">
              <textarea
                name='body'
                id='body'
                placeholder='body'
                className='form-control'
                value={formData.body}
                onChange={handleChange} 
              />
            </div>
            <div className="col mb-3">
              <input
                type="checkbox"
                name="public"
                id="public"
                className='form-check-input'
                checked={formData.public}
                onChange={handleChange}
              />
              <label htmlFor="">pubblica</label>
            </div>
            <div className="col">
              <button type='submit' className='btn btn-primary'> {/*quando viene cliccato, viene inviato il form} */}
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

//useState gestisce lo stato dei componenti del form
//handleChange gestisce i cambiamenti nei campi del form
//handleSubmit invia i dati all'API, resetta il form e mostra un messaggio di conferma
//axios.post comunica con l'API inviando i dati inseriti dall'utente
