

 function BinarySearchTree(){
    function Node(key){
        this.key=key
        this.left=null
        this.right=null
    }
    this.root=null
    BinarySearchTree.prototype.insert=function(key){
        let newNode=new Node(key)
        if(this.root=null){
         this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }

    }
    BinarySearchTree.prototype.insertNode=function(node,newNode){
        if(newNode.key<node.key){
            if(node.left==null){
                node.left=newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right==null){
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    BinarySearchTree.prototype.preOrderTraversal=function(handler){
        this.perOrderTraversalNode(this.root,handler)
       }
    BinarySearchTree.prototype.perOrderTraversalNode=function(node,handler){
        if(node!==null){
            handler(node.key)
            this.perOrderTraversalNode(node.left,handler)
            this.perOrderTraversalNode(node.right,handler)
        }
    }
}
let bst=new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
let resultString=''
bst.preOrderTraversal(function(key){
    resultString+=key+''})
console.log(resultString)

