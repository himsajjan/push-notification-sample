/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const webPush = require('web-push');

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fwU8dToQpHg:APA91bFkNKgdTjs6xwawIaLKt5MwZoX5E6QMldwPOIqWihJAC3m64ZEybjWY1Cvu9dsTjx7ttesTQzR_pTamj-WUIRVDKyya6m3wV19ez3BIZmadA-44jdAvdQUiVssMUgWblvENMJrs","expirationTime":null,"keys":{"p256dh":"BNTTrPrRJRwBl6w4wbDewwcoYynmbIvSWStffRl435Ng4II4aSR6-KKu7Fcj2iZNZQq_Ga3MXxeLXnWqzJWQJsY","auth":"ULrDi4DRkgYtR7U2J_JqWQ"}};

const vapidPublicKey = '';
const vapidPrivateKey = '';

const payload = 'Here is a payload!';

const options = {
  // gcmAPIKey: 'YOUR_SERVER_KEY',
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:himsajjan@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
