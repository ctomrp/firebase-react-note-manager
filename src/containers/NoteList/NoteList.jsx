import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.css'
import TextCard from 'components/TextCard/TextCard'
import { useNavigate } from 'react-router-dom'
import { NoteAPI } from 'api/note'
import { deleteNote } from 'store/notes/notes-slice'

function NoteList({noteList}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function deleteNote_(note) {
        if(window.confirm('Delete note?')){
          NoteAPI.deleteById(note.id);
          dispatch(deleteNote(note));
        }
      }

  return (
    <div className={`row justify-content-center`}>
        {
            noteList.map((note)=>{
                return (
                    <div className={s.card_container} key={note.id}>
                        <TextCard
                        title={note.title} 
                        content={note.content} 
                        subtitle={note.created_at}
                        onClick={()=>navigate(`/note/${note.id}`)}
                        onClickTrash={()=>deleteNote_(note)}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default NoteList