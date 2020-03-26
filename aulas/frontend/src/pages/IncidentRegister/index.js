import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function IncidentRegister() {

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

const ongId = localStorage.getItem('ongId')

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };
    try{
      await api.post('incidents', data, {
        headers: {
          authorization: ongId,
        }
      })

      history.push("/home")
    } catch (err) {
      alert('erro ao cadastrar caso, tente novamente.')
    }
  }
  return (
    <div className="incidentRegister-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/home">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para a home
          </Link>

        </section>

        <form onSubmit={handleNewIncident}>
          <input required 
            placeholder="Título do caso"
            value={title}
            onchange={e => setTitle(e.target.value)}
            />
          <textarea className="description" required 
            placeholder="Descrição"
            value={description}
            onchange={e => setDescription(e.target.value)}
            />
          
          <input required 
            placeholder="Valor em reais"
            value={value}
            onchange={e => setValue(e.target.value)}
            />

          <div className="button-group">
            <Link className="button cancel" to="/home">Cancelar</Link>
            <button className="button" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}