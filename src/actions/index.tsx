import * as constants from '../constants';
import { StoreState } from '../types/index';
import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Action, Dispatch } from 'redux';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}
export interface ResetEnthusiasm {
    type: constants.RESET_ENTHUSIASM;
}

// tslint:disable-next-line:max-line-length
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | ResetEnthusiasm ;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
export function resetEnthusiasm(): ResetEnthusiasm {
    return {
        type: constants.RESET_ENTHUSIASM
    };
}

export function ajaxAction():  ActionCreator<ThunkAction<Promise<Action>, StoreState, void>> {
    // tslint:disable-next-line:no-any
    return function(dispatch: Dispatch<EnthusiasmAction>): any {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => { 
            // tslint:disable-next-line:no-console
            response.json().then( (post: object) => {console.log( post ); });
            dispatch(incrementEnthusiasm());

        });
        
    };
}