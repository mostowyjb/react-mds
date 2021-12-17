import { useState } from 'react';
import './Todo.css';

function App() {

    const [listComPseudo, setListComPseudo] = useState([])
  
    const [pseudo, setPseudo] = useState("");
    const [commentaire, setCommentaire] = useState("");
  
    function generateId(){
      let carac = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let id = "";
  
      for (let i = 0; i < 20; i++) {
          let generate = carac[Math.floor(Math.random() * 64)];
          id += generate;
      }
      console.log(id);
      return id;
    }
  
    function handlePseudo(e){
      setPseudo(e.target.value);
    }
  
    function handleCommentaire(e){
      setCommentaire(e.target.value);
    }
  
    function handleSubmit(e){
      e.preventDefault();
      const newCommentaire = {id: generateId(), pseudo: pseudo, commentaire: commentaire}
      setListComPseudo([...listComPseudo, newCommentaire])
      setPseudo("");
      setCommentaire("");
    }
  
    return (
        <div className="todo-container">
          <div className="task">
            <form onSubmit={handleSubmit}>
                <div className="header">Ajouter un commentaire</div>
                <div className='create-task'>
                    <input type="text" value={pseudo} onChange={handlePseudo} placeholder="pseudo" className="input"/>
                    <input type="text" value={commentaire} onChange={handleCommentaire} placeholder="commentaire" className="input"/>
                    <button type="submit">Commenter</button>
                </div>

            </form>
          </div>  
          <div className="">
            <div className="task">
                <div className="header">Nombre de commentaire {listComPseudo.length}</div>    
                <ul className="scrollContainer">
                  <div className="scrollItem">
                    {listComPseudo.map(ComPseudo => (
                      <li className="listing">
                        <p className="ici">{ComPseudo.pseudo} : {ComPseudo.commentaire}</p>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
          </div>
        </div>
    );
  }
  
  export default App;