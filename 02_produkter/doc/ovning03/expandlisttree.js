function setupListTree() {
  // Dags att sätta igång. Vi börjar med att skapa funktionen setupListTree
  // som ska laddas onload och ska förbereda listträdet. Det första funktionen
  // ska göra är att kolla om den ska köras överhuvudtaget, d.v.s. graceful
  // degradation med object detection. En if-sats kontrollerar om metoderna
  // document.getDocumentById och document.createElement existerar. Finns dessa
  // båda metoder brukar alla andra metoder vi kommer att använda att finnas.
  // Finns de inte är det ingen idé att förtsätta så funktionen returnerar falskt.
  
	if (!document.getElementById || !document.createElement) return false;
	var tree_root = document.getElementById('expand-list-tree');
	if (!tree_root) return false;

	var branches = tree_root.getElementsByTagName('ul');
	for (var i=0; i<branches.length; i++) {
		var branch = branches[i].parentNode;
		branch.className = 'closed';

		var expander = document.createElement('a');
		expander.setAttribute('href', '#');
		expander.className = 'expander-closed';
		expander.setAttribute('title', 'Öppna');
		expander.onclick = function() {
			if (this.parentNode.className === 'closed') {
				this.parentNode.className = 'opened';
				this.className = 'expander-opened';
				this.setAttribute('title', 'Stäng');
			} else {
				this.parentNode.className = 'closed';
				this.className = 'expander-closed';
				this.setAttribute('title', 'Öppna');
			}
			return false;
		}
		branch.insertBefore(expander, branch.firstChild);
	}
	return true;
}
window.onload = setupListTree;
