import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

// import { Container } from './styles';

export default function EditMeetup({ props }) {
  const [meetu, setMeetup] = useState({});
  useEffect(() => {
    console.log(props);
  }, [props]);
  return <h1>Editar meetup</h1>;
}
