var push = require('web-push');

var vapidKeys = {
    publicKey: 'BCBCCT4BFYPeqRcAX3MpLX9drV8hY-QwIdlQVpYL0lb4k8DG31GpzVdksF8c3E1DC0WTpaP33BezPQCd_BzSjUQ',
    privateKey: 'YyWfCNTrrxjP1qUODyEnHc31NODs_rpKjfgJUEQby5s'
};

push.setVapidDetails('mailto:mine-modsgames@hotmail.com', vapidKeys.privateKey);

push.sendNotification(subscription, 'test message');