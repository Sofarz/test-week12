import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AlbumList } from './pages/Albumlist'
import { AlbumDetail } from './pages/AlbumDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <AlbumList />
        </Route>
        <Route path='/albums/:albumId' exact>
          <AlbumDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
