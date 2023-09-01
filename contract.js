// Function: getAccount
async function getAccount() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
    } catch (err) {
        if (err.code === 4001) {
            console.log('Please connect to MetaMask.');
            throw new Error('MetaMask Access Denied');
        } else {
            console.error(err);
            throw err;
        }
    }
}

// Function: connectToMetamask
async function connectToMetamask() {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
    } else {
        alert("Metamask no instalado. Instalelo para continuar");
        return;
    }

    try {
        const account = await getAccount();
        displayAccountNumber(account);
        //initializeContract(account);
    } catch (error) {
        if (error.message === 'MetaMask Access Denied') {
            console.error('User denied account access');
        } else {
            console.error(error);
        }
        return;
    }


    function displayAccountNumber(account) {
        document.getElementById("accountBtn").classList.add("highHidden");
        document.getElementById("bannerMetamaskBtn").classList.add("highHidden");
        document.getElementById("metaMaskBtn").classList.remove("highHidden");
        document.getElementById("metaMaskBtn").classList.add("highShow");
        document.getElementById("accountNumber").innerText = account;
    }


}







// Function: jobInfo
/*async function jobInfo() {
    const account = await getAccount();
    if (!account) {
        alert("Por favor, conecta tu wallet de MetaMask para continuar.");
        return;
    }

    const jobName = document.getElementById("inputJobName").value;
    const jobPrice = document.getElementById("inputJobPrice").value;

    document.getElementById("inputJobName").value = "";
    document.getElementById("inputJobPrice").value = "";

    await window.contract.methods.postJob(jobName, jobPrice).send({from: account});
}*/

// Function: initializeContract
/*async function initializeContract() {
    const contractABIRequest = await fetch('../out/EmpowerAction.sol/JobMarket.json');
    const contractABI = await contractABIRequest.json();
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    
    window.contract = new window.web3.eth.Contract(contractABI["abi"], contractAddress);
    const job = await contract.methods.getJob(0).call();
    console.log('Result:', job );
}*/

// Function: saveName
async function saveName() {
    const account = await getAccount();
    if (!account) {
        alert("Por favor, conecta tu wallet de MetaMask para continuar.");
        return;
    }
    const imgPath = "./img/usuario.png";
    const userName = document.getElementById('inputNameRegister').value;
    const pass = document.getElementById("inputPassword").value;
        if( !userName || !pass){
            window.alert("Los Campos deben estar llenos");
            return}
            else if(pass.length < 5) {
                window.alert("La contraseña debe contener mas de 5 caracteres");
            return}
    document.getElementById('UserNameWallet').textContent = userName;
    document.getElementById("UserNameAvatar").src = imgPath;
    document.getElementById("registerWindow").classList.remove("show");
    document.getElementById("registerBtn").classList.add("highHidden");
    return;
}

/*  Function: registerUser
async function registerUser(name) {
    const account = await getAccount();
    window.contract.methods.registerUser(name).send({from: account});
}

// Function: checkUser
async function checkUser(address) {
    const checkedUser = await window.contract.methods.checkUser(address).call();
    console.log('User registered:', checkedUser);
}*/