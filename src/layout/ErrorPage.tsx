import {useRouteError} from 'react-router-dom'
import classes from './error-page.module.css'

interface ErrorPageType {
  statusText: string
  message: string
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorPageType;
  console.log(error);

  return (
    <div className={classes.errorPage}>
      <h1>Opps!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
