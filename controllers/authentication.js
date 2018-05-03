const apiKey = "YOUR_API_KEY",
    API = new (require("../utils/API"))("https://au-api.basiq.io", apiKey);


const accessTokenCheck = function (req, res) {
    /**
     * You should require some sort of authentication between your client and your server
     *
     * @type {null}
     */
    const clientId = req.body.client_id ? req.body.client_id : null;

    if (!clientId) {
        return res.status(400).json({
            success: false,
            errorMessage: "Client ID not received"
        });
    }

    API.setHeader("Authorization", "Basic "+apiKey).setHeader("basiq-version", "2.0").send("oauth2/token", "POST", {
        "scope": "CLIENT_ACCESS"
    }, function (body) {
        res.json({
            success: true,
            result: body
        });
    }, function (err) {
        res.json({
            success: false,
            result: err
        });
    });
};

const createAUser = function (req, res) {
    const email = req.body.email ? req.body.email : null;

    if (!email) {
        return res.status(400).json({
            success: false,
            errorMessage: "Email not received"
        });
    }

    API.setHeader("Authorization", "Basic "+apiKey).setHeader("basiq-version", "2.0").send("oauth2/token", "POST", {
        "grant_type": "client_credentials"
    }, function (body) {
        API.setHeader("Authorization", "Bearer " + body.access_token).send("users", "POST", {
            "email": email
        }, function (body) {
            res.json({
                success: true,
                result: body
            });
        }, function (err) {
            res.json({
                success: false,
                result: err
            });
        });
    }, function (err) {
        res.json({
            success: false,
            result: err
        });
    });

};

module.exports = {
    accessTokenCheck,
    createAUser
};