package se.kth.sda7.wdgroupproject.posts;

import se.kth.sda7.wdgroupproject.comments.Comment;
import se.kth.sda7.wdgroupproject.user.User;

import javax.persistence.*;

@Entity
@Table(name = "post")

public class Post {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "body")
    private String body;

    // @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    // private List<Comment> comments = new ArrayList<>();

    @ManyToOne
    private User user;

    public Post() {
    }

    public Post(String body, User user) {
        this.body = body;
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void addComment(Comment comment) {
    }
}
