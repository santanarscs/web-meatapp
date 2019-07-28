import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Container, Meetup } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');
      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
          { locale: pt }
        ),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="meetup/new">
          <MdAddCircleOutline color="#fff" size={20} />
          Novo meetup
        </Link>
      </header>
      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.dateFormatted}</span>
              <MdChevronRight color="#fff" size={24} />
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
