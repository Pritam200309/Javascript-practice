# Table 20 — typeof Operator Results Type of 
|  val	                                                    |  Result                                                                    |
|-----------------------------------------------------------|----------------------------------------------------------------------------|
| Null	                                                    | "object"                                                                   |
| Boolean	                                                | "boolean"                                                                  |
| Number	                                                | "number"                                                                   |
| Undefined	                                                | "undefined"                                                                |
| String	                                                | "string"                                                                   |
| Object (native and does not implement [[Call]])	        | "object"                                                                   |
| Object (native or host and does implement [[Call]])	    | "function"                                                                 |
| Object (host and does not implement [[Call]])	            | Implementation-defined except may not be "undefined", "boolean", "number", or string |