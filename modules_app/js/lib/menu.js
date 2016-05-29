define(function(){
    return [
        {
            id: 1,
            label: {
                l_token: 'tok_ucase_start',
                l_default: 'Start'
            },
            run: {
                object: 'newApp',
                method: 'start'
            }
        },
        {
            id: 2,
            label: {
                l_token: 'tok_ucase_options',
                l_default: 'Options'
            },
            run: {
                object: 'newApp',
                method: 'options'
            }
        },
        {
            id: 3,
            label: {
                l_token: 'tok_ucase_contact',
                l_default: 'Contact'
            },
            run: {
                object: 'newApp',
                method: 'contact'
            }
        }
    ];
});