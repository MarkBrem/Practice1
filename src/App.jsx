import {GlobalStyle} from './GlobalStyle'
import { PageBoard } from 'PageBoard/PageBoard';
import data from './upcoming-events.json'
import { Title } from 'Title/Title';

export const App = () => {
  return <>
  <Title/>
  <PageBoard events={data}/>
  <GlobalStyle/>
  </>
};


