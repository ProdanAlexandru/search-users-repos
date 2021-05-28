import React from 'react';
import Title from './components/Title';
import Input from './components/Input';
import BackButton from './components/Button';
import {useState} from 'react';
import { Typography} from '@material-ui/core'

const App = () =>{

    const [isSearching, setIsSearching] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);
    const [isNoData, setIsNoData] = useState(false);

    const fetchRepos =  async () => {
        const response = await fetch(`https://api.github.com/users/${searchInput}/repos`)

        const data = await response.json();
        console.log(data);

        if (data.message==="Not Found"){
            setIsNoData(true);
            return;
        }  else {
            setRepos(data); 
            console.log(repos);
        }
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (searchInput === "") {
            return;
        }
        setIsSearching(true);
        fetchRepos();
        setSearchInput("");
    }

    const HandleChange = (e) =>{
        setSearchInput(e.target.value);
    }

    const BackButtonHandle = () => {
        setIsSearching(false); 
        setIsNoData(false);
    }

    const reposList = repos.map(repo => (
        <li key ={repo.id} className="repoItem">
            <Typography>
                <a className="linkItem" href={repo.html_url}>{repo.name}</a>
            </Typography>
        </li>
    ))

    const errMessage = <p>No repos found!</p> ;

    const showResult = <div> {(isSearching) &&  <div className="reposArea"> <ul className="ulList"> {!isNoData ? reposList : errMessage} </ul> </div>} </div>
      
    const renderAllData =
        <div style={{textAlign:"center"}}>
            <Title/>
            {(!isSearching) && <Input HandleSubmit={HandleSubmit} HandleChange={HandleChange}/>}
                {showResult} 
            {isSearching && <BackButton OnHandleBtn={BackButtonHandle} />}
        </div>;

    return renderAllData;
}

export default App
