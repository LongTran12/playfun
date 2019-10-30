import Web3 from 'web3'
import { config } from '../config'
const web3Public = new Web3(new Web3.providers.WebsocketProvider(config.web3Provider))
export default web3Public