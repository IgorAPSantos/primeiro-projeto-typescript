import { Router } from 'express'
import {
    atualizarCarro,
    cadastrarCarros,
    detalharCarro,
    excluirCarro,
    listarCarros
} from './controladores/carros'

const rotas = Router()

rotas.post('/carros', cadastrarCarros)
rotas.get('/carros', listarCarros)
rotas.get('/carros/:id', detalharCarro)
rotas.put('/carros/:id', atualizarCarro)
rotas.delete('/carros/:id', excluirCarro)

export default rotas