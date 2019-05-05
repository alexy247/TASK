
	subscribes = [ ];
module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
	 

	
    on: function (event, subscriber, handler) {
		subscribes.push({ 
		subscriberName: subscriber, 
		eventName: event, 
		handler: handler 
		}); 
	return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
		subscribes.forEach( function (item){ 
		if (item.subscriberName == subscriber && item.eventName == event) 
		subscribes.splice(subscribes.indexOf(item),1); 
		}); 
		return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
		subscribes.forEach( function(item){ 
		if (item.eventName == event && item.subscriberName != undefined && item.handler != undefined) 
		item.handler.call(item.subscriberName); 
} ); 
return this;
   }

};
