import axios from 'axios'
import { setProjects } from '../slices'


export const getProjects = () => dispatch =>
  axios
    .get('https://sprintchallengenodeexpress.herokuapp.com/api/projects')
    .then(res => dispatch(setProjects(res.data)))
    .catch(err => console.log(err))