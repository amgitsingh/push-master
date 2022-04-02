const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = { 
  "endpoint": "https://fcm.googleapis.com/fcm/send/cfS9vMwlqtk:APA91bHa9vIUJJRX4bjqbj97AiSwLPFzDMPlkuKXVvwF6ifZvis_1Rsx2m-I5zbiOHyaqT6DHBEqFQadVQVS9-OQOwh69z1USPl124NTUa1vC3jqKCmiIA83Dy4eaMbV97HG5rDajgN7", 
  "expirationTime": null, 
  "keys": { 
    "p256dh": "BGRhmsBFpKbGQ-T-yZBlhtcEeOpJ2_MbRSFnlsiudLNOv1mcMVEBrPs4FC2xQHXQ-RydHQr2n96ES0FTG4klf3g", 
    "auth": "JSbk6xO_jpJrC40Q2Hji9A" 
  } 
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
