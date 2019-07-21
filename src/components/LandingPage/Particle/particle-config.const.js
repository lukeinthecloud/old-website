export const particleConfig = {
    'particles': {
        'number': {
            'value': 30,
            'density': {
                'enable': false
            }
        },
        'size': {
            'value': 4,
            'random': true,
            'anim': {
                'speed': 4,
                'size_min': 1
            }
        },
        'line_linked': {
            'enable': false
        },
        'move': {
            'random': true,
            'speed': 1,
            'direction': 'top',
            'out_mode': 'out'
        }
    },
    'interactivity': {
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'bubble'
            },
            'onclick': {
                'enable': true,
                'mode': 'repulse'
            }
        },
        'modes': {
            'bubble': {
                'distance': 250,
                'duration': 2,
                'size': 0,
                'opacity': 0
            },
            'repulse': {
                'distance': 400,
                'duration': 4
            }
        }
    }
};
