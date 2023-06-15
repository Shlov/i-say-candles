import { NavLink } from "react-router-dom";


export const MainPage = () => {

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 30,
          color: '#010101'
        }}
      >
        <h1>I say candles</h1>
        <NavLink to='/builder'>Конструктор свічок</NavLink>
      </div>
    </>
  );
};