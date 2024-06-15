// controllers/astrologer.controller.js
import { FlowDistribution } from '../services/flowDistribution.service';

class AstrologerController {
  constructor() {
    this.flowDistribution = new FlowDistribution([], []);
  }

  distributeFlow(req, res) {
    this.flowDistribution.distributeFlow();
    res.send(this.flowDistribution);
  }

  toggleTopAstrologerFlow(req, res) {
    this.flowDistribution.toggleTopAstrologerFlow(req.body.astrologerId, req.body.flowAdjustment);
    res.send(this.flowDistribution);
  }
}

export default AstrologerController;