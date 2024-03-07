import { NoteAPI } from "api/note";
import Header from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";
import { withAuthRequired } from "hoc/withAuthRequired";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    const unsub = NoteAPI.onShouldSyncNotes(fetchAllNotes);
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <Header />
      <ButtonPrimary
        className={s.btn}
        onClick={() => navigate("note/new")}
      >
        +
      </ButtonPrimary>
      <div className={s.workspace}>
        <Outlet />
      </div>
    </div>
  );
}

export const ProtectedApp = withAuthRequired(App);
