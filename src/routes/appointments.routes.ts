import { Router } from 'express'
import { uuid } from 'uuidv4'

const appointmentsRouter = Router()

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  console.log(request.body);
});

export default appointmentsRouter
