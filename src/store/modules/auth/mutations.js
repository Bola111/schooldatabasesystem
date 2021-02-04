import { firebaseAuth } from "src/boot/config";

export default {
    'AUTH_STATUS_CHANGE'(state) {
		state.isLoggedIn = true;
        state.user = firebaseAuth().currentUser;
        
	}
}