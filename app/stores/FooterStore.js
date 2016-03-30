import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
    constructor() {
        this.bindActions(FooterActions);
        this.characters = [];
    }
    
    onGetTopCharactersSuccess(data) {
        this.characters = data.slice(0,5);
        //this.characters = [{"characterId":1},{"characterId":2}];
    }
    
    onGetTopCharactersFail(jqXhr) {
        // Handle multiple response formats, fallback to Http status code number.
        console.log(jqXhr);
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseTex || jqXhr.statusText);
    }
} 

export default alt.createStore(FooterStore);