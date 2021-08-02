import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

export { checkForName, handleSubmit };

window.checkForName = checkForName;
window.handleSubmit = handleSubmit;
