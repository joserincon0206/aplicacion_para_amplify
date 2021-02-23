import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsNavbar, updateNavbar } from '../actions/navbarActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { NAVBAR_UPDATE_RESET } from '../constants/navbarConstants';

export default function NavbarEditScreen(props) {
  const navbarId = props.match.params.id;
  const [nombre, setNombre] = useState('');

  const navbarDetails = useSelector((state) => state.navbarDetails);
  const { loading, error, navbar } = navbarDetails;

  const navbarUpdate = useSelector((state) => state.navbarUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = navbarUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/navbarlist');
    }
    if (!navbar || navbar._id !== navbarId || successUpdate) {
      dispatch({ type: NAVBAR_UPDATE_RESET });
      dispatch(detailsNavbar(navbarId));
    } else {
      setNombre(navbar.nombre);
    }
  }, [navbar, dispatch, navbarId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update navbar
    dispatch(
      updateNavbar({
        _id: navbarId,
        nombre,
      })
    );
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Editar el nombre de tu empresa</h1>
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
              <label htmlFor="nosotros">Nombre</label>
              <input
                id="nombres"
                type="text"
                placeholder="Enter nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
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
