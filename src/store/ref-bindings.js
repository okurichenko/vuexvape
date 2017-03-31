import firebaseApp from '@/store/firebase';

export default function (appInstance) {
  const db = firebaseApp.database();
  appInstance.$bindAsArray('aromas', db.ref('aromas'));
}
