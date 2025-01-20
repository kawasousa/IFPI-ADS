#include <iostream>
#include <string>
#include <vector>

class User;

class Post{
    private:
        User* user; //user é um ponteiro para o objeto da classe User.
        int id;
        std::string text;
        std::string img_url;
        std::string video_url;
        std::vector<User*> likes;
        std::vector<std::string> comments;
    public:
        Post(User* user, int id, std::string text, std::string img_url = "", std::string video_url = ""){
            this->user = user;
            this->id = id;
            this->text = text;
            this->img_url = img_url;
            this->video_url = video_url;
            this->likes = {};
            this->comments = {};
        }

        int GetID(){
            return this->id;
        }

        //Retorna o numero de likes do post
        std::vector<User*> GetLikes(){
            return this->likes;
        }

        //Adiciona um like ao post
        void AddLike(User* user){
            this->likes.push_back(user);
        }

        std::string GetText(){
            return this->text;
        }
};

class User{
    private:
        std::vector<Post> posts;
        std::vector<User> audence;
        std::vector<User> close_friends;
        std::string name;
    public:
        User(std::string name){
            this->name = name;
            this->posts = {};
            this->audence = {};
            this->audence = {};
        }

        //Cria um novo post.
        void CreatePost(std::string text, std::string img_url = "", std::string video_url = ""){
            Post post{this, GetPosts().size()-1, text, img_url, video_url};
            this->posts.push_back(post);
        }

        void DeletePost(Post* post){
            //Itera sobre os posts e verifica qual tem o ID do post recebido para excluir.
            for(int i = 0; i < GetPosts().size(); i++){
                if(GetPosts()[i].GetID() == post->GetID()){
                    this->posts.erase(posts.begin() + i);
                    // delete post;
                    break;
                }
            }
        }

        //Adiciona um like ao post.
        void LikePost(Post& post){ //Post& significa que o objeto de parâmetro é uma referência ao objeto passado. Assim, as alterações serão feitas no objeto referência.
            post.AddLike(this);
        }

        //Retorna o vetor de postagens do usuario.
        std::vector<Post> GetPosts(){
            return this->posts;
        }

        //Retorna o nome do usuário.
        std::string GetName(){
            return this->name;
        }
};

int main(){
    //Criação dos usuarios.
    User torquato{"torquato"};
    User kawasousa{"kawasousa"};

    //Criação de um post.
    torquato.CreatePost("Minha primeira postagem :)");
    torquato.CreatePost("Minha segunda postagem :D");
    std::cout << "Numero de posts torquato: " << torquato.GetPosts().size() << std::endl;

    Post post = torquato.GetPosts()[0];

    //Likes em um post.
    kawasousa.LikePost(post);
    torquato.LikePost(post);

    std::cout << "Numero de likes do post torquato: " << post.GetLikes().size() << std::endl;

    torquato.DeletePost(&post); //Passando a referência de memória de post.

    std::cout << "Numero de posts torquato: " << torquato.GetPosts().size() << std::endl;
    std::cout << "Texto do primeiro post acessivel: " << torquato.GetPosts()[0].GetText() << std::endl;

    std::cout << "Numero de Likes: " << std::endl;
    std::cout << post.GetLikes().size() << std::endl; //-> post continua existindo porque é apenas removido do vetor de posts. PRECISO RESOLVER E FAZER ELE SER INACESSIVEL

    return 0;
}