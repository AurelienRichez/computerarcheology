var BinaryData = (function() {
	
	var my = {
		dataCache  : [],
		dataOrigin : null
	};
	
	my.write = function(addr,value) {
		my.dataCache[addr-my.dataOrigin] = value;
	},
	
	my.read = function(addr) {
		return my.dataCache[addr-my.dataOrigin];
	},
	
	my.loadDataCacheFromURL = function(url,success) {
		my.dataOrigin = null;
		$.get(url,{},function(t) {
			my.loadDataCache(t.toUpperCase());
			success();
		});
	},
	
	my.loadDataCache = function(src) {
		
		if(!src) {
			src = document.body.innerHTML.toUpperCase();
		}
		
	    var lines = src.split("\n");
	    my.dataCache = [];
	    for (var x=0;x<lines.length;x=x+1) {
	        var line = lines[x].trim();
	        var i = line.indexOf(";");
	        if (i>=0) {
	            line = line.substring(0,i).trim();
	        }
	        
	        while (true) {
	            i = line.indexOf("<");
	            if (i<0) {
	                line = line.trim();
	                break;
	            }
	            j = line.indexOf(">",i);
	            if(j<0) {
	                break;
	            }
	            line = line.substring(0,i)+line.substring(j+1)
	        }
	        
	        if (line.length<5 || line[4]!=':') {
	            continue;
	        }
	        var adr = parseInt(line.substring(0,5),16);
	        if (isNaN(adr)) {
	        	continue;
	        } 
	        if (my.dataOrigin==null) {
	        	my.dataOrigin = adr;
	        }
	        
	        if (adr-my.dataOrigin != my.dataCache.length) {
	            throw "Data continuency error: "+adr;
	        }
	        
	        line = line.substring(5).trim();
	        
	        while(true) {        
	            if (line.length<3) {
	                if (isTwoDigitHex(line)) {
	                	my.dataCache.push(parseInt(line,16));
	                }
	                break;
	            }
	            if(line[2]!=' ') {
	                break;
	            }
	            var a = line.substring(0,2);
	            line = line.substring(2).trim();
	            if (!isTwoDigitHex(a)) {
	                break;
	            }
	            my.dataCache.push(parseInt(a,16));
	            
	        }
	    }		    
		
	}
	
	function isTwoDigitHex(s) {
		if (s.length<2) {
			return false;
		}
		if(s.length>2 && s.charAt(2)!=" ") {
			return false;
		}
		var c = s.charAt(0);
		if ( !((c>='0' && c<='9') || (c>='A' && c<='F')) ){
			return false;
		}
		c = s.charAt(1);
		if ( !((c>='0' && c<='9') || (c>='A' && c<='F')) ){
			return false;
		}
		return true;
	}
	
	return my;
	
}());