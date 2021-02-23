import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsFooter, updateFooter } from '../actions/footerActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { FOOTER_UPDATE_RESET } from '../constants/footerConstants';

export default function FooterEditScreen(props) {
  const footerId = props.match.params.id;
  const [nosotros, setNosotros] = useState('');
  const [nosotrosParrafo, setNosotrosParrafo] = useState('');
  const [nosotrosLinea1, setNosotrosLinea1] = useState('');
  const [nosotrosLinea2, setNosotrosLinea2] = useState('');
  const [nosotrosLinea3, setNosotrosLinea3] = useState('');
  const [enlaces, setEnlaces] = useState('');
  const [enlace1, setEnlace1] = useState('');
  const [enlace2, setEnlace2] = useState('');
  const [social, setSocial] = useState('');
  const [social1, setSocial1] = useState('');
  const [social2, setSocial2] = useState('');

  const footerDetails = useSelector((state) => state.footerDetails);
  const { loading, error, footer } = footerDetails;

  const footerUpdate = useSelector((state) => state.footerUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = footerUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/footerlist');
    }
    if (!footer || footer._id !== footerId || successUpdate) {
      dispatch({ type: FOOTER_UPDATE_RESET });
      dispatch(detailsFooter(footerId));
    } else {
      setNosotros(footer.nosotros);
      setNosotrosParrafo(footer.nosotrosParrafo);
      setNosotrosLinea1(footer.nosotrosLinea1);
      setNosotrosLinea2(footer.nosotrosLinea2);
      setNosotrosLinea3(footer.nosotrosLinea3);
      setEnlaces(footer.enlaces);
      setEnlace1(footer.enlace1);
      setEnlace2(footer.enlace2);
      setSocial(footer.social);
      setSocial1(footer.social1);
      setSocial2(footer.social2);
    }
  }, [footer, dispatch, footerId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update footer
    dispatch(
      updateFooter({
        _id: footerId,
        nosotros,
        nosotrosParrafo,
        nosotrosLinea1,
        nosotrosLinea2,
        nosotrosLinea3,
        enlaces,
        enlace1,
        enlace2,
        social,
        social1,
        social2,
      })
    );
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Footer</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="nosotros">Nosotros</label>
              <input
                id="nosotros"
                type="text"
                placeholder="Enter nosotros"
                value={nosotros}
                onChange={(e) => setNosotros(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="nosotrosParrafo">Nosotros Párrafo</label>
              <textarea
                id="nosotrosParrafo"
                rows="3"
                type="text"
                placeholder="Enter nosotros párrafo"
                value={nosotrosParrafo}
                onChange={(e) => setNosotrosParrafo(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="nosotrosLinea1">Nosotros Línea 1</label>
              <input
                id="nosotrosLinea1"
                type="text"
                placeholder="Enter nosotros Línea 1"
                value={nosotrosLinea1}
                onChange={(e) => setNosotrosLinea1(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="nosotrosLinea2">Nosotros Línea 2</label>
              <input
                id="nosotrosLinea2"
                type="text"
                placeholder="Enter nosotros Línea 2"
                value={nosotrosLinea2}
                onChange={(e) => setNosotrosLinea2(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="nosotrosLinea3">Nosotros Línea 3</label>
              <input
                id="nosotrosLinea3"
                type="text"
                placeholder="Enter nosotros Línea 3"
                value={nosotrosLinea3}
                onChange={(e) => setNosotrosLinea3(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="enlaces">Enlaces</label>
              <input
                id="enlaces"
                type="text"
                placeholder="Enter enlaces"
                value={enlaces}
                onChange={(e) => setEnlaces(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="enlace1">Enlace1</label>
              <input
                id="enlace1"
                type="text"
                placeholder="Enter enlace 1"
                value={enlace1}
                onChange={(e) => setEnlace1(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="enlace2">Enlace3</label>
              <input
                id="enlace2"
                type="text"
                placeholder="Enter enlace 2"
                value={enlace2}
                onChange={(e) => setEnlace2(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="social">Redes Sociales</label>
              <input
                id="social"
                type="text"
                placeholder="Enter title"
                value={social}
                onChange={(e) => setSocial(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="social1">Link 1</label>
              <input
                id="social1"
                type="text"
                placeholder="Enter link 1"
                value={social1}
                onChange={(e) => setSocial1(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="social2">Link 2</label>
              <input
                id="social2"
                type="text"
                placeholder="Enter link 2"
                value={social2}
                onChange={(e) => setSocial2(e.target.value)}
              ></input>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
