const router=require('express').Router();
const controller=require('../controllers/sessionController');

router.post('/start', controller.startSession);
router.post('/pause', controller.pauseSession);
router.post('/stop', controller.stopSession);

module.exports=router;
