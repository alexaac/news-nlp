import { checkUrl } from './js/urlChecker';
import { handleSubmit, callMeaningApi } from './js/formHandler';
import { getEnvData } from './js/envData';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

export { checkUrl, handleSubmit, callMeaningApi, getEnvData };

window.checkUrl = checkUrl;
window.handleSubmit = handleSubmit;
window.callMeaningApi = callMeaningApi;
window.getEnvData = getEnvData;
