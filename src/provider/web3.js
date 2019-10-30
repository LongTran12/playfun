import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

const WrapWeb3 = ({ children }) => {
    const [web3State, setState] = useState({
        installed: false,
        loggedIn: false,
        address: undefined,
        web3: undefined
    })

    useEffect(() => {
        const checkWeb3 = () => {
            if (window.ethereum) {
                let web3 = new Web3(window.ethereum);
                try {
                    window.ethereum.enable().then(function (accounts) {
                        // User has allowed account access to DApp...
                        setState({
                            installed: true,
                            loggedIn: true,
                            address: accounts[0],
                            web3: web3
                        })
                    }).catch(e => {
                        setState({
                            installed: true,
                            loggedIn: false,
                            address: undefined,
                            web3: undefined
                        })
                        checkWeb3()
                    });
                } catch (e) {
                    setState({
                        installed: true,
                        loggedIn: false,
                        address: undefined,
                        web3: undefined
                    })
                    checkWeb3()
                }
            }
            // Legacy DApp Browsers
            else if (window.web3) {
                let web3 = new Web3(window.web3.currentProvider);
                setState({
                    installed: true,
                    loggedIn: true,
                    address: window.web3.eth.accounts[0] || web3.eth.accounts[0],
                    web3: web3
                })
            }
            // Non-DApp Browsers
            else {
                checkWeb3()
            }
        }
        checkWeb3()
    }, [])
    return React.cloneElement(children, { web3State, web3: web3State.web3 })
}

export default WrapWeb3