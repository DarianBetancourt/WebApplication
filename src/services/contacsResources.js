import { api } from './config'

/* adding authorization to requests*/
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default {
    /* Get all Contacts */
    listContacts: () => {
        return api.get('/contacts');
    },
    /* Create Contact */
    newContact: (contact) => {
        return api.post('/contacts',{name:contact.name, email:contact.email, mobile:contact.mobile});
    },
    /* Get Contact */
    getContact: (id) => {
        return api.get('/contacts/'+id);
    },
    /* Edit Contact */
    updateContact: (contact) => {
        return api.put('/contacts/'+contact.id,{name:contact.name, email:contact.email, mobile:contact.mobile });
    },
    /* Delete Contact */
    deleteContact: (id) => {
        return api.delete('/contacts/'+id,{});
    }
}