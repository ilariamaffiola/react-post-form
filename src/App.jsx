import { useState } from 'react'
import axios from 'axios';

function App() {

// Oggi creeremo il nostro primo form multifield per inviare dati in POST ad un’API.
// Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog.
// I dati che il form dovrà inviare sono i seguenti:
// author (string) - L’autore del post
// title (string) - Il titolo del post
// body (string) - Il testo del post
// public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)
// L’endpoint a cui effettuare la chiamata POST è il seguente: https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts
// Questo endpoint, in caso di successo, vi restituisce i dati inviati. Stampateli in console per verificare di essere riusciti ad inviare correttamente tutto!
// Numero minimo di push: 7
// Buon Lavoro
const [formData, setFormData] = useState({
  author: '',
  title: '',
  body: '',
  public: false
})

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value
  })
}
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData).then((res) => {
    console.log(res.data);
  })
}
  return (
    <>
      <div className="container">
        <div className="row">
          <form className='border rounded bg-light p-4' onSubmit={handleSubmit}> 
            <div className="col">
              <input
                type="text"
                name='author'
                id='author'
                placeholder='Author'
                className='form-control'
                value={formData.author}
                onChange={handleChange} 
              />
            </div>
            <div className="col">
              <input
                type="text"
                name='title'
                id='Title'
                placeholder='title'
                className='form-control'
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <textarea
                type="text"
                name='body'
                id='body'
                placeholder='body'
                className='form-control'
                value={formData.body}
                onChange={handleChange} 
              />
            </div>
            <div className="col">
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
              <button type='submit' className='btn btn-primary'>
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
