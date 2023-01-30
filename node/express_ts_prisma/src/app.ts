import { Express, json } from 'express';
// import routes from './routes';
// import ErrorHandler from './middlewares/error';
// import Cors from './middlewares/cors';

export default class App {
  public app: Express;

  constructor() {
    this.app.use(json());
    // this.app.use(Cors);
    // this.app.use(routes);
    // this.app.use(ErrorHandler);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Started on port ${PORT}`));
  }
}
