import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

//client/main.js

//contractAddress = "0x1403f77cd20a4f080d2b38e2da87a00c8775031d"

//ABIArray = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newName","type":"string"}],"name":"changeName","outputs":[],"payable":false,"type":"function"}]

//data = "6060604052604060405190810160405280600681526020017f41726768796100000000000000000000000000000000000000000000000000008152506000908051906020019061005092919061005e565b50341561005957fe5b610103565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009f57805160ff19168380011785556100cd565b828001600101855582156100cd579182015b828111156100cc5782518255916020019190600101906100b1565b5b5090506100da91906100de565b5090565b61010091905b808211156100fc5760008160009055506001016100e4565b5090565b90565b6102c3806101126000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100465780635353a2d8146100df575bfe5b341561004e57fe5b610056610139565b60405180806020018281038252838181518152602001915080519060200190808383600083146100a5575b8051825260208311156100a557602082019150602081019050602083039250610081565b505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100e757fe5b610137600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101d7565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101cf5780601f106101a4576101008083540402835291602001916101cf565b820191906000526020600020905b8154815290600101906020018083116101b257829003601f168201915b505050505081565b80600090805190602001906101ed9291906101f2565b505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023357805160ff1916838001178555610261565b82800160010185558215610261579182015b82811115610260578251825591602001919060010190610245565b5b50905061026e9190610272565b5090565b61029491905b80821115610290576000816000905550600101610278565b5090565b905600a165627a7a72305820f512ec72011343ac9db4873e7bf93d7a9882b2aa5e61334d1abceb7099e68efe0029"

contractAddress = "0x8eb60436cfc2613c4f32a7d55826a62f02b893c2"
ABIArray = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newName","type":"string"}],"name":"changeName","outputs":[],"payable":false,"type":"function"}]
data = "6060604052604060405190810160405280600381526020017f73736800000000000000000000000000000000000000000000000000000000008152506000908051906020019061005092919061005e565b50341561005957fe5b610103565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009f57805160ff19168380011785556100cd565b828001600101855582156100cd579182015b828111156100cc5782518255916020019190600101906100b1565b5b5090506100da91906100de565b5090565b61010091905b808211156100fc5760008160009055506001016100e4565b5090565b90565b6102c3806101126000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100465780635353a2d8146100df575bfe5b341561004e57fe5b610056610139565b60405180806020018281038252838181518152602001915080519060200190808383600083146100a5575b8051825260208311156100a557602082019150602081019050602083039250610081565b505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100e757fe5b610137600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101d7565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101cf5780601f106101a4576101008083540402835291602001916101cf565b820191906000526020600020905b8154815290600101906020018083116101b257829003601f168201915b505050505081565b80600090805190602001906101ed9291906101f2565b505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023357805160ff1916838001178555610261565b82800160010185558215610261579182015b82811115610260578251825591602001919060010190610245565b5b50905061026e9190610272565b5090565b61029491905b80821115610290576000816000905550600101610278565b5090565b905600a165627a7a7230582011bae779fb52872b055b2ce03e4b26e87fcf6473ce97b25acfcffe575756896c0029"


contractAddressMonitor = "0x3c451df1b24c8266d293c6576fa17f591d16e19e" 
ABIArrayMonitor = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newName","type":"string"}],"name":"changeName","outputs":[],"payable":false,"type":"function"}]
dataMonitor = "6060604052606060405190810160405280602e81526020017f736370206172676f4071622e6c6f6e692e6f72673a2f686f6d652f6172676f2f81526020017f6c6f672e7478742024484f4d452f00000000000000000000000000000000000081525060009080519060200190610076929190610084565b50341561007f57fe5b610129565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c557805160ff19168380011785556100f3565b828001600101855582156100f3579182015b828111156100f25782518255916020019190600101906100d7565b5b5090506101009190610104565b5090565b61012691905b8082111561012257600081600090555060010161010a565b5090565b90565b6102c3806101386000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100465780635353a2d8146100df575bfe5b341561004e57fe5b610056610139565b60405180806020018281038252838181518152602001915080519060200190808383600083146100a5575b8051825260208311156100a557602082019150602081019050602083039250610081565b505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100e757fe5b610137600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101d7565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101cf5780601f106101a4576101008083540402835291602001916101cf565b820191906000526020600020905b8154815290600101906020018083116101b257829003601f168201915b505050505081565b80600090805190602001906101ed9291906101f2565b505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023357805160ff1916838001178555610261565b82800160010185558215610261579182015b82811115610260578251825591602001919060010190610245565b5b50905061026e9190610272565b5090565b61029491905b80821115610290576000816000905550600101610278565b5090565b905600a165627a7a72305820e6efbac31cbce2a8ce6a3349bdd52fa0aff82957218135d6e8f058a56aadde2c0029"

contractAddressResult = "0x0cf320ef1552df3eb0eb27d1c3936863eb1f9155"
ABIArrayResult = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newName","type":"string"}],"name":"changeName","outputs":[],"payable":false,"type":"function"}]
dataReasult = "6060604052606060405190810160405280603181526020017f736370206172676f4071622e6c6f6e692e6f72673a2f686f6d652f6172676f2f81526020017f726573756c742e7478742024484f4d452f00000000000000000000000000000081525060009080519060200190610076929190610084565b50341561007f57fe5b610129565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c557805160ff19168380011785556100f3565b828001600101855582156100f3579182015b828111156100f25782518255916020019190600101906100d7565b5b5090506101009190610104565b5090565b61012691905b8082111561012257600081600090555060010161010a565b5090565b90565b6102c3806101386000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100465780635353a2d8146100df575bfe5b341561004e57fe5b610056610139565b60405180806020018281038252838181518152602001915080519060200190808383600083146100a5575b8051825260208311156100a557602082019150602081019050602083039250610081565b505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100e757fe5b610137600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101d7565b005b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101cf5780601f106101a4576101008083540402835291602001916101cf565b820191906000526020600020905b8154815290600101906020018083116101b257829003601f168201915b505050505081565b80600090805190602001906101ed9291906101f2565b505b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023357805160ff1916838001178555610261565b82800160010185558215610261579182015b82811115610260578251825591602001919060010190610245565b5b50905061026e9190610272565b5090565b61029491905b80821115610290576000816000905550600101610278565b5090565b905600a165627a7a723058202264cddcbf576ab298eb29171465c28fb5149e32fb5ce77249b45e1eb17b1d300029"

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter1 = new ReactiveVar(0);
  this.counter2 = new ReactiveVar(0);
  this.counter3 = new ReactiveVar(0);
});

Template.hello.helpers({
  counter1() {
 
    
  },
  counter2(){
	  
  },
  counter3(){
	  
  },
  
  
});

Template.hello.events({
  'click #button'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter1.set(instance.counter1.get() +2);
   
    var template= Template.instance();
    myContract = web3.eth.contract(ABIArray).at(contractAddress);
    
    myContract.name(function(err, res){
        TemplateVar.set(template, "counter1", res);
        //TemplateVar.set(template, "counter", "ssh argo@qb.loni.org qsub /home/argo/request.sh");
        console.log(TemplateVar.get(template,"counter1"));
        Meteor.call('runCode', TemplateVar.get(template,"counter1"), function (err, response) {console.log(response);});
    });
  },

  'click #buttonMonitor'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 2);
   
    var template= Template.instance();
    myContract = web3.eth.contract(ABIArrayMonitor).at(contractAddressMonitor);
    
    myContract.name(function(err, res){
        TemplateVar.set(template, "counter2", res);
        //TemplateVar.set(template, "counter", "scp argo@qb.loni.org:/home/argo/log.txt $HOME/");
        console.log(TemplateVar.get(template,"counter2"));
        Meteor.call('runCode', TemplateVar.get(template,"counter2"), function (err, response) {console.log(response);});
    });
   },

    'click #buttonResult'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 2);
   
    var template= Template.instance();
    myContract = web3.eth.contract(ABIArrayResult).at(contractAddressResult);
    
    myContract.name(function(err, res){
        TemplateVar.set(template, "counter3", res);
        //TemplateVar.set(template, "counter", "scp argo@qb.loni.org:/home/argo/result.txt $HOME/");
        console.log(TemplateVar.get(template,"counter3"));
        Meteor.call('runCode', TemplateVar.get(template,"counter3"), function (err, response) {console.log(response);});
    });

    },
  
});