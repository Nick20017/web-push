var push = require('web-push');

var vapidKeys = {
    publicKey: 'BCBCCT4BFYPeqRcAX3MpLX9drV8hY-QwIdlQVpYL0lb4k8DG31GpzVdksF8c3E1DC0WTpaP33BezPQCd_BzSjUQ',
    privateKey: 'YyWfCNTrrxjP1qUODyEnHc31NODs_rpKjfgJUEQby5s'
};

push.setVapidDetails('mailto:mine-modsgames@hotmail.com', vapidKeys.privateKey);

var subscription = {"endpoint":"https://par02p.notify.windows.com/w/?token=BQYAAADam%2futk0rDiVGknsMci2gCoeyiLmt19ffXpdzcZYC%2b24rwZWAuJ7On8yTNn1q1pLv82C5gc%2fCzt7H6rLISrHfKzNdrYFhe9vKAfgrg7YcsXUQ8KHmkbKiBcLjYjKJR4ngLL%2fXY5kMYxAIHP3byPgbdU4mWxPSh6%2fFsvRAeK9iJKCNUeSgU%2bpGPwppLrU0bDpzFIGIrdUPD90hCJSMvEdRRQ0RM%2fpPIW46lKPwN4yuZ2Uof02i73geKMTWTc%2boN1NN11mnliV51y43gR4FGAE0OMbkB8O78%2fzmhXSgvnJMNjMupCsYk3M6nyODK1DYMtG7PPaE9IcNNw%2f%2fkI1xyAIp7hHh9tnY3Pw8TQ3L3aZUP3A%3d%3d","expirationTime":null,"keys":{"p256dh":"BEI-XzxkrGUWQuaLCTqW1zKzynb7Eq708XJsJNXY-uUPHnjztMU7BcBeEfDRSQNiKummAzdWfHImey2sWyyorEE","auth":"xuuO8CHvHG9SIlYpnR_lTQ"}};

push.sendNotification(subscription, 'test message');