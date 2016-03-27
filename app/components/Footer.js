import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore';
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = FooterStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    
    componentDidMount() {
        FooterStore.listen(this.onChange);
        FooterActions.getTopCharacters();
    }
    
    componentWillUnmount() {
        FooterStore.unlisten(this.onChange);
    }
    
    onChange(state) {
        this.setState(state);
    }
    
    render() {
        console.log(this.state);
        let leaderboardCharacters = this.state.characters.map((character) => {
            return (
                <li key={character.characterId}>
                    <Link to={'/characters/' + character.characterId}>
                        <img className='thumb-md' src={'http://image.eveonline.com/Charactor/' + character.characterId + '_128.jpg'} />
                    </Link>
                </li>
            )
        });
        
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3 className="lead"><strong>版权信息</strong></h3>
                            <p>使用 <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side 制作.</p>
                            <p>你可以通过Github工程浏览 <a href="https://github.com/hcy12321/newedenfaces-react">源码</a>.</p>
                            <p>© 2016 Chenyao Huang</p>
                        </div>
                        <div className="col-sm-7 hidden-xs">
                            <h3 className="lead"><strong>排行榜</strong> 前五名</h3>
                            <ul className="list-inline">
                                {leaderboardCharacters}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;