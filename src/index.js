import React from 'react';
import ReactDOM from 'react-dom/client';
import { Headerfile } from './Headerfile/Headerfile';
import { Dashboard } from './Dashboard/Dashboard';
import { Pagelogo } from './Pagelogo/Pagelogo';
import { Headerright } from './Header-right/Headerright';
import { Footer } from './Footer/Footer';
import { Layout } from './Layout/Layout';
import { Pages } from './Pages/Pages';
import { Crafted } from './Crafted/Crafted';
import { Accounts } from './Accounts/Accounts';
import { Errors } from './Errors/Errors';
import { Widgets } from './Widgets/Widgets';
import { Apps } from './Apps/Apps';
import { Chat } from './Chat/Chat';
import { User } from './User/User';
import { Changelog } from './Changelog/Changelog';
import { Button } from './Button/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Pagelogo></Pagelogo>
  <Headerfile></Headerfile>
  <Headerright></Headerright>
  <Dashboard></Dashboard>
  <Layout></Layout>
  <Crafted></Crafted>
  <Pages></Pages>
  <Accounts></Accounts>
  <Errors></Errors>
  <Widgets></Widgets>
  <Apps></Apps>
  <Chat></Chat>
  <User></User>
  <Changelog></Changelog>
  <Footer></Footer>
  <Button></Button>
  
    
  </>
);


